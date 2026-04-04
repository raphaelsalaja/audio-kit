import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Carousel({
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
          d="M3.00012 13.25V4.75C3.00012 4.312 3.08572 3.8979 3.20932 3.5H2.75012C1.50942 3.5 0.500122 4.5093 0.500122 5.75V12.25C0.500122 13.4907 1.50942 14.5 2.75012 14.5H3.20932C3.08572 14.1021 3.00012 13.688 3.00012 13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.0001 13.25V4.75C15.0001 4.312 14.9145 3.8979 14.7909 3.5H15.2501C16.4908 3.5 17.5001 4.5093 17.5001 5.75V12.25C17.5001 13.4907 16.4908 14.5 15.2501 14.5H14.7909C14.9145 14.1021 15.0001 13.688 15.0001 13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.7501 2H7.25012C5.73134 2 4.50012 3.23122 4.50012 4.75V13.25C4.50012 14.7688 5.73134 16 7.25012 16H10.7501C12.2689 16 13.5001 14.7688 13.5001 13.25V4.75C13.5001 3.23122 12.2689 2 10.7501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Carousel;
