import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLock({
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
          d="M13 11.25C13 10.8362 13.3362 10.5 13.75 10.5C14.1638 10.5 14.5 10.8362 14.5 11.25V12H13V11.25ZM11.5 12.0177V11.25C11.5 10.0078 12.5078 9 13.75 9C14.9922 9 16 10.0078 16 11.25V12.0177C16.8479 12.1391 17.5 12.8687 17.5 13.75V15.25C17.5 16.2162 16.7162 17 15.75 17H11.75C10.7838 17 10 16.2162 10 15.25V13.75C10 12.8687 10.6521 12.1391 11.5 12.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.6174 9.18819C10.2691 9.71625 10.0507 10.3375 10.0078 11.0065C9.10133 11.583 8.5 12.5957 8.5 13.75V15.25C8.5 15.8943 8.68756 16.4948 9.01105 17C9.00736 17 9.00368 17 8.99999 17C6.99283 17 5.29503 16.6354 4.01259 16.2313C2.74425 15.8317 2.05162 14.4186 2.60517 13.1674C3.69058 10.7157 6.14167 9 8.99999 9C9.55696 9 10.0985 9.06515 10.6174 9.18819Z"
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

export default UserLock;
