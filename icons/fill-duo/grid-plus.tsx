import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridPlus({
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
          d="M6.25006 2H3.75006C2.78356 2 2.00006 2.7835 2.00006 3.75V6.25C2.00006 7.2165 2.78356 8 3.75006 8H6.25006C7.21656 8 8.00006 7.2165 8.00006 6.25V3.75C8.00006 2.7835 7.21656 2 6.25006 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 2H11.7501C10.7836 2 10.0001 2.7835 10.0001 3.75V6.25C10.0001 7.2165 10.7836 8 11.7501 8H14.2501C15.2166 8 16.0001 7.2165 16.0001 6.25V3.75C16.0001 2.7835 15.2166 2 14.2501 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25006 10H3.75006C2.78356 10 2.00006 10.7835 2.00006 11.75V14.25C2.00006 15.2165 2.78356 16 3.75006 16H6.25006C7.21656 16 8.00006 15.2165 8.00006 14.25V11.75C8.00006 10.7835 7.21656 10 6.25006 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.5001 12H13.7501V10.25C13.7501 9.8359 13.4142 9.5 13.0001 9.5C12.586 9.5 12.2501 9.8359 12.2501 10.25V12H10.5001C10.086 12 9.75006 12.3359 9.75006 12.75C9.75006 13.1641 10.086 13.5 10.5001 13.5H12.2501V15.25C12.2501 15.6641 12.586 16 13.0001 16C13.4142 16 13.7501 15.6641 13.7501 15.25V13.5H15.5001C15.9142 13.5 16.2501 13.1641 16.2501 12.75C16.2501 12.3359 15.9142 12 15.5001 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridPlus;
