import React, { FC, useState, useCallback, useRef } from 'react';
import classNames from 'classnames';

import styles from './Select.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import DropDownIcon from '../Icons/DropDownIcon';

interface Props {
  /**
   * Placeholder for Dropdown
   */
  placeholder?: string;

  /**
   * Can select multiple options
   */
  isMulti?: boolean;

  /**
   * Dropdown open state
   */
  isOpen?: boolean;

  /**
   * Can not change checked state. Default: false
   */
  disabled?: boolean;

  /**
   * options for Dropdown
   */
  options?: Array<{value: string, label: string}>;

  /**
   * Register callback for change event
   */
  onChange: (newValue: Array<string> | string) => void;
}

const Select: FC<Props> = ({
  disabled,
  isMulti,
  isOpen,
  onChange,
  options = [],
  placeholder = ''
}) => {

  const [selected, setSelected] = useState<Array<number>>([]);
  const [labels, setLabel] = useState<Array<string>>([placeholder]);
  const [isOpened, setOpened] = useState(!!isOpen);
  const [values, setValues] = useState<Array<string>>([]);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpenClose = () => {
    setOpened(!isOpened);
    if (!isOpened && menuRef.current) {
      menuRef.current.focus();
    }
  }

  const handleBlur = () => {
    setOpened(false);
  };

  const handleChange = useCallback(
    (index: number) => (event: React.MouseEvent) => {
      event.preventDefault();
      let newValue = [options[index].value];
      let newLabel = [options[index].label];
      if (!!isMulti) {
        const selectedIndex = selected.includes(index)
          ? selected.filter(sel => sel !== index)
          : [...selected, index].sort((x, y) => x - y);
        newValue = selectedIndex.map(sel => options[sel].value);
        newLabel = selectedIndex.length
          ? selectedIndex.map(sel => options[sel].label)
          : [placeholder];
        setSelected(selectedIndex)
      } else {
        setSelected([index])
        setOpened(false);
      }
      setValues(newValue);
      setLabel(newLabel);
      
      if (onChange) {
        onChange(!!isMulti ? newValue : newValue[0])
      }
    }, [values, onChange]
  );

  const renderOption = (
    option: {value: string, label: string},
    index: number
  ) => (
    <div
      key={`${option.label}-${index}`}
      className={styles.option}
      onClick={handleChange(index)}
    >
      {isMulti
        ? <Checkbox label={option.label} checked={selected.includes(index)} />
        : option.label
      }
    </div>
  );

  const renderOptionMenu = (
    <div
      className={styles.menu}
      onBlur={handleBlur}
      tabIndex={0}
      ref={menuRef}
    >
      {options.map(renderOption)}
    </div>
  );

  return (
    <React.Fragment>
      <button
        className={classNames(styles.select, { [styles.opened]: isOpened })}
        disabled={disabled}
        onClick={toggleOpenClose}
        tabIndex={0}
      >
        {labels.join(',')}
        <DropDownIcon />
      </button>
      {isOpened && renderOptionMenu}
    </React.Fragment>
  );
};

export default Select;
