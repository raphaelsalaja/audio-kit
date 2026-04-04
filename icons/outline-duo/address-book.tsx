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
          d="M5.25 1.75H12.75C13.8546 1.75 14.75 2.64543 14.75 3.75V14.25C14.75 15.3546 13.8546 16.25 12.75 16.25H5.25C4.14543 16.25 3.25 15.3546 3.25 14.25V3.75C3.25 2.64543 4.14543 1.75 5.25 1.75ZM10.5 6.25C10.5 7.07843 9.82843 7.75 9 7.75C8.17157 7.75 7.5 7.07843 7.5 6.25C7.5 5.42157 8.17157 4.75 9 4.75C9.82843 4.75 10.5 5.42157 10.5 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 7.75C9.82843 7.75 10.5 7.07843 10.5 6.25C10.5 5.42157 9.82843 4.75 9 4.75C8.17157 4.75 7.5 5.42157 7.5 6.25C7.5 7.07843 8.17157 7.75 9 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 12.235C6.385 10.942 7.582 10 9 10C10.418 10 11.615 10.943 12 12.235"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75H5.25C4.14543 1.75 3.25 2.64543 3.25 3.75V14.25C3.25 15.3546 4.14543 16.25 5.25 16.25H12.75C13.8546 16.25 14.75 15.3546 14.75 14.25V3.75C14.75 2.64543 13.8546 1.75 12.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 3.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 8.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.75H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 12.25H3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default AddressBook;
