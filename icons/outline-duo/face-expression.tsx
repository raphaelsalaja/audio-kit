import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceExpression({
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
          d="M13.25 3H4.75C3.7835 3 3 3.7835 3 4.75V13.25C3 14.2165 3.7835 15 4.75 15H13.25C14.2165 15 15 14.2165 15 13.25V4.75C15 3.7835 14.2165 3 13.25 3Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 6.75V4.75C2.75 3.645 3.645 2.75 4.75 2.75H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.25V13.25C15.25 14.355 14.355 15.25 13.25 15.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 8C6.55228 8 7 7.55228 7 7C7 6.44772 6.55228 6 6 6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.897 9.757C11.743 9.603 11.531 9.536 11.314 9.568C9.78201 9.807 8.20201 9.806 6.67601 9.567C6.46201 9.535 6.25501 9.602 6.10401 9.752C5.95001 9.905 5.87701 10.128 5.91101 10.35C6.14101 11.861 7.46901 13.001 9.00001 13.001C10.531 13.001 11.86 11.86 12.089 10.347C12.122 10.131 12.05 9.911 11.897 9.758V9.757Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceExpression;
