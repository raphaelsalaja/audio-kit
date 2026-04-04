import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Smoking({
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
          d="M12.75 9C12.336 9 12 8.664 12 8.25V8C12 6.897 11.103 6 10 6C8.07 6 6.5 4.43 6.5 2.5V2.25C6.5 1.836 6.836 1.5 7.25 1.5C7.664 1.5 8 1.836 8 2.25V2.5C8 3.603 8.897 4.5 10 4.5C11.93 4.5 13.5 6.07 13.5 8V8.25C13.5 8.664 13.164 9 12.75 9Z"
          fill={fill}
        />
        <path
          d="M15.75 9C15.336 9 15 8.664 15 8.25V7.75C15 5.131 12.869 3 10.25 3C9.836 3 9.5 2.664 9.5 2.25C9.5 1.836 9.836 1.5 10.25 1.5C13.696 1.5 16.5 4.304 16.5 7.75V8.25C16.5 8.664 16.164 9 15.75 9Z"
          fill={fill}
        />
        <path
          d="M1 12.25C1 11.2833 1.78393 10.5 2.75 10.5H15.25C16.2161 10.5 17 11.2833 17 12.25V13.25C17 14.2167 16.2161 15 15.25 15H2.75C1.78393 15 1 14.2167 1 13.25V12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13 15V10.5H15.25C16.2161 10.5 17 11.2833 17 12.25V13.25C17 14.2167 16.2161 15 15.25 15H13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Smoking;
