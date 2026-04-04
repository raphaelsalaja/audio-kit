import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileClock({
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
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3125 14.9502C16.1934 15.2398 15.9141 15.415 15.6191 15.415C15.5234 15.415 15.4277 15.3969 15.3339 15.3588L13.7148 14.6938C13.4336 14.5781 13.25 14.3042 13.25 14V12.25C13.25 11.8359 13.5859 11.5 14 11.5C14.4141 11.5 14.75 11.8359 14.75 12.25V13.4971L15.9043 13.9712C16.2871 14.1284 16.4707 14.5669 16.3125 14.9502Z"
          fill={secondaryfill}
        />
        <path
          d="M2 3.75C2 2.23203 3.23054 1 4.75 1H10.336C10.7999 1 11.2446 1.18398 11.5733 1.51267L15.4859 5.42526C15.8164 5.7543 16 6.2016 16 6.664V8.87583C15.38 8.63322 14.7053 8.5 14 8.5C10.9656 8.5 8.5 10.9656 8.5 14C8.5 15.1062 8.82769 16.1369 9.39116 17H4.75C3.23054 17 2 15.768 2 14.25V3.75ZM5.75 6C5.33579 6 5 6.33579 5 6.75C5 7.16421 5.33579 7.5 5.75 7.5H7.75C8.16421 7.5 8.5 7.16421 8.5 6.75C8.5 6.33579 8.16421 6 7.75 6H5.75ZM5 9.75C5 9.33579 5.33579 9 5.75 9H8.75C9.16421 9 9.5 9.33579 9.5 9.75C9.5 10.1642 9.16421 10.5 8.75 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75ZM11.501 6.499C10.951 6.499 10.501 6.049 10.501 5.499L10.5 2.578L14.433 6.499H11.501Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileClock;
