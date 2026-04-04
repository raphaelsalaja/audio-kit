import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabOpen({
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
          d="M13.75 15.75H4.25C3.8359 15.75 3.5 15.41 3.5 15V11.25C3.5 10.01 4.5093 9 5.75 9H12.25C13.4907 9 14.5 10.01 14.5 11.25V15C14.5 15.41 14.1641 15.75 13.75 15.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.75 17H2.25C1.8359 17 1.5 16.66 1.5 16.25V14.75C1.5 13.23 2.7334 12 4.25 12H13.75C15.2666 12 16.5 13.23 16.5 14.75V16.25C16.5 16.66 16.1641 17 15.75 17Z"
          fill={fill}
        />
        <path
          d="M12.0304 3.71999L9.53025 1.21999C9.23725 0.930088 8.76265 0.930088 8.46975 1.21999L5.96975 3.71999C5.67675 4.00999 5.67675 4.49007 5.96975 4.78017C6.26275 5.07007 6.73735 5.07007 7.03025 4.78017L8.24995 3.56008V7.25002C8.24995 7.66002 8.58585 8.00002 8.99995 8.00002C9.41405 8.00002 9.74995 7.66002 9.74995 7.25002V3.56008L10.9695 4.78017C11.116 4.93017 11.3079 5.00014 11.4998 5.00014C11.6917 5.00014 11.8838 4.93027 12.0303 4.78017C12.3233 4.49017 12.3234 4.01009 12.0304 3.71999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TabOpen;
