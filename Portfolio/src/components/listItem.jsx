export default function ListItem({ children, ...props }) {
    return (
      <li
        className="list-group-item pt-4 d-flex justify-content-space-between align-items-center flex-wrap margin-10px padding-10px"
        {...props}
      >
        {children}
      </li>
    );
  }