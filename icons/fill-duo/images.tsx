import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Images({
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
          d="M1.5 6.75C1.5 5.23069 2.73128 4 4.25 4H13.75C15.2687 4 16.5 5.23069 16.5 6.75V13.25C16.5 14.7693 15.2687 16 13.75 16H4.25C2.73128 16 1.5 14.7693 1.5 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5 13.25L12.664 9.414C11.883 8.633 10.617 8.633 9.83599 9.414L3.38782 15.8622C3.659 15.9516 3.94885 16 4.24999 16H13.75C15.2687 16 16.5 14.7693 16.5 13.25Z"
          fill={fill}
        />
        <path
          d="M4 1.75C4 1.33579 4.33579 1 4.75 1H13.25C13.6642 1 14 1.33579 14 1.75C14 2.16421 13.6642 2.5 13.25 2.5H4.75C4.33579 2.5 4 2.16421 4 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 9.5C6.4404 9.5 7 8.94 7 8.25C7 7.56 6.4404 7 5.75 7C5.0596 7 4.5 7.56 4.5 8.25C4.5 8.94 5.0596 9.5 5.75 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Images;
