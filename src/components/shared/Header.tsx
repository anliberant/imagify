const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2>{title}</h2>
      {subtitle && <p class='p-16-regular mt-4'>{subtitle}</p>}
    </>
  );
};
export default Header;
