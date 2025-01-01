const InputField = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      className="outline-none bg-transparent p-3 text-color-body focus:border-b-color-theme transition-all border-b-[1px] border-b-[#dddddd]"
      placeholder={placeholder}
    />
  );
};

export default InputField;
