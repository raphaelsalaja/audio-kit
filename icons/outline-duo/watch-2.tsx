import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch2({
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
          d="M12.75 3.25H5.25C4.1454 3.25 3.25 4.1454 3.25 5.25V12.75C3.25 13.8546 4.1454 14.75 5.25 14.75H12.75C13.8546 14.75 14.75 13.8546 14.75 12.75V5.25C14.75 4.1454 13.8546 3.25 12.75 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.375 3.25L12.0947 2.12869C12.0391 1.90609 11.8391 1.75 11.6096 1.75H6.39041C6.16101 1.75 5.961 1.90609 5.9053 2.12869L5.625 3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.625 14.75L5.9053 15.8713C5.9609 16.0939 6.16091 16.25 6.39041 16.25H11.6096C11.839 16.25 12.039 16.0939 12.0947 15.8713L12.375 14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 3.25H5.25C4.1454 3.25 3.25 4.1454 3.25 5.25V12.75C3.25 13.8546 4.1454 14.75 5.25 14.75H12.75C13.8546 14.75 14.75 13.8546 14.75 12.75V5.25C14.75 4.1454 13.8546 3.25 12.75 3.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V9L11.5 10.5"
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

export default Watch2;
