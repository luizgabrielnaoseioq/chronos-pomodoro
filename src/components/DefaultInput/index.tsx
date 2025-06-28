type DefaultInputProps = { 
  id: string;
  exmp: string;
 } & React.ComponentProps<'input'>;

export function DefaultInput ({ id, exmp, type }: DefaultInputProps) {
  return( 
    <>
      <label htmlFor={id}>Task:</label>
      <input id={id} type={type} placeholder={exmp}/>
    </>
  );
}