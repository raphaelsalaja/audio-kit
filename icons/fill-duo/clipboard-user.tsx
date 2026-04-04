import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardUser({
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
          d="M5.25 2C3.73079 2 2.5 3.23079 2.5 4.75V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V4.75C15.5 3.23079 14.2692 2 12.75 2H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.5 2.25C5.5 1.28379 6.28379 0.5 7.25 0.5H10.75C11.7162 0.5 12.5 1.28379 12.5 2.25C12.5 3.21621 11.7162 4 10.75 4H7.25C6.28379 4 5.5 3.21621 5.5 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9Z"
          fill={fill}
        />
        <path
          d="M11.1011 14H6.89903C6.49233 14 6.10855 13.8013 5.87175 13.4683C5.63935 13.1407 5.57874 12.7207 5.70964 12.3453C6.19794 10.943 7.52013 10.0001 9.00013 10.0001C10.4801 10.0001 11.8023 10.943 12.2911 12.3458C12.4215 12.7208 12.3609 13.1407 12.1285 13.4684C11.8917 13.8014 11.5078 14 11.1011 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ClipboardUser;
