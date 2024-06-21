import Header from "./Header";
import Pie from "./Pie";
function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Pie></Pie>
    </>
  );
}

export default Layout;
