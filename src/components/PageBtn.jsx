import { PageBtn } from './PageBtn.styled';

const Button = ({ setPage, children }) => {
  return (
    <PageBtn className="Button" onClick={setPage}>
      {children}
    </PageBtn>
  );
};

export default Button;
