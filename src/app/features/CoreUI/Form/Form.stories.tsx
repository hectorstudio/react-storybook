import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { action } from '@storybook/addon-actions';

import '../../App/Root/Root.scss';
import FormInput from '../FormInput/FormInput';
import TwoColumnGrid from '../TwoColumnGrid/TwoColumnGrid';
import Label from '../Label/Label';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select'

const options = [
  {value: 'pm', label: 'Produt'},
  {value: 'digital', label: 'Digital Marketing'},
  {value: 'brand', label: 'Brand Marketing'},
  {value: 'marketing', label: 'Marketing'}
]

export default { title: 'Form' };

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  marketing: string;
  customeraccept: boolean;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const mapSubmitHandler = useCallback((data) => onSubmit(data), [onSubmit]);

  return (
    <form onSubmit={handleSubmit(mapSubmitHandler)}>
      <TwoColumnGrid>
        <FormInput
          fillWidth
          label='Firstname *'
          name='firstname'
          ref={register({ required: true })}
          error={errors.firstname && 'First name is required.'}
        />
        <FormInput
          fillWidth
          label='Lastname *'
          name='lastname'
          ref={register({ required: true })}
          error={errors.lastname && 'Last name is required.'}
        />
        <FormInput
          fillWidth
          label='E-Mail *'
          name='email'
          type='email'
          ref={register({ required: true })}
          error={errors.email && 'E-Mail is required.'}
        />
        <FormInput
          fillWidth
          label='Phone Number'
          name='phone'
          ref={register({})}
        />
        <Label title={'Marketing Role'}>
          <Select
            name='marketing'
            placeholder='Label'
            options={options}
            ref={register({})}
            isMulti
          />
          <Label title='...'>
            <Checkbox
              name='customeraccept'
              label='Customer Accepts Marketing'
              ref={register({})}
            />
          </Label>
        </Label>
        <Button size='big' type='submit'>Submit</Button>
      </TwoColumnGrid>
    </form>
  );
};

export const normal = () => (
  <Form onSubmit={action('submit')} />
);
