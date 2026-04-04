import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserSearch({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M13 10C11.3428 10 10 11.3428 10 13C10 14.6572 11.3428 16 13 16C13.5565 16 14.0775 15.8486 14.5241 15.5847L15.7197 16.7803C16.0126 17.0732 16.4875 17.0732 16.7804 16.7803C17.0732 16.4874 17.0732 16.0126 16.7804 15.7197L15.5848 14.5241C15.8486 14.0774 16 13.5564 16 13C16 11.3428 14.6572 10 13 10ZM11.5 13C11.5 12.1712 12.1712 11.5 13 11.5C13.8288 11.5 14.5 12.1712 14.5 13C14.5 13.8288 13.8288 14.5 13 14.5C12.1712 14.5 11.5 13.8288 11.5 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.7632 16.9058C9.41078 16.1297 8.5 14.6714 8.5 13C8.5 11.3926 9.34236 9.98233 10.6098 9.18639C10.0932 9.06451 9.55423 9 8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.29503 16.6354 6.99283 17 8.99999 17C9.6181 17 10.2069 16.9654 10.7632 16.9058Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UserSearch;
