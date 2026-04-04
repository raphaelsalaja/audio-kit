import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AddressBook({
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
          d="M5.25 1C3.73119 1 2.5 2.23119 2.5 3.75V14.25C2.5 15.7688 3.73119 17 5.25 17H12.75C14.2688 17 15.5 15.7688 15.5 14.25V3.75C15.5 2.23119 14.2688 1 12.75 1H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.9999 6.5C6.9999 5.39545 7.89536 4.5 8.9999 4.5C10.1044 4.5 10.9999 5.39545 10.9999 6.5C10.9999 7.60455 10.1044 8.5 8.9999 8.5C7.89536 8.5 6.9999 7.60455 6.9999 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.28119 12.021C5.75828 10.4187 7.24123 9.25 9.00001 9.25C10.759 9.25 12.2417 10.4199 12.7188 12.0208C12.7864 12.2478 12.7429 12.4934 12.6013 12.6833C12.4598 12.8731 12.2368 12.985 12 12.985H6.00001C5.7632 12.985 5.5403 12.8732 5.39875 12.6833C5.25719 12.4935 5.21362 12.2479 5.28119 12.021Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.25 3C17.6642 3 18 3.33579 18 3.75V6.25C18 6.66421 17.6642 7 17.25 7C16.8358 7 16.5 6.66421 16.5 6.25V3.75C16.5 3.33579 16.8358 3 17.25 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.25 8C17.6642 8 18 8.33579 18 8.75V11.25C18 11.6642 17.6642 12 17.25 12C16.8358 12 16.5 11.6642 16.5 11.25V8.75C16.5 8.33579 16.8358 8 17.25 8Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 5.75C1 5.33579 1.33579 5 1.75 5H3.25C3.66421 5 4 5.33579 4 5.75C4 6.16421 3.66421 6.5 3.25 6.5H1.75C1.33579 6.5 1 6.16421 1 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H3.25C3.66421 11.5 4 11.8358 4 12.25C4 12.6642 3.66421 13 3.25 13H1.75C1.33579 13 1 12.6642 1 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AddressBook;
