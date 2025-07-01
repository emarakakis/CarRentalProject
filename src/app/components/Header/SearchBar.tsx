import * as React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';


export type SearchParamType = {
  query: string;
};

export default function SearchBar({
  setSearchParams,
}: {
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParamType>>;
}) {
  const { register, handleSubmit, reset } = useForm<SearchParamType>({
    defaultValues: { query: '' },
  });

  const onSubmit = (data: SearchParamType) => {
    setSearchParams(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{display:'flex', border:2}}>
            <TextField sx={{border: null}}{...register('query')} placeholder='Enter Car ID to Search'/>
            <Button type="submit" variant='contained' sx={{color:"primary.dark"}}>Search</Button>
        </Box>
    </form>
  );
}
