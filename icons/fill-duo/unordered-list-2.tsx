import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UnorderedList2({
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
          d="M15.7501 9.75H8.25012C7.83612 9.75 7.50012 9.414 7.50012 9C7.50012 8.586 7.83612 8.25 8.25012 8.25H15.7501C16.1641 8.25 16.5001 8.586 16.5001 9C16.5001 9.414 16.1641 9.75 15.7501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 4.5H8.25012C7.83612 4.5 7.50012 4.164 7.50012 3.75C7.50012 3.336 7.83612 3 8.25012 3H15.7501C16.1641 3 16.5001 3.336 16.5001 3.75C16.5001 4.164 16.1641 4.5 15.7501 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75012 10.75C4.71662 10.75 5.50012 9.9665 5.50012 9C5.50012 8.0335 4.71662 7.25 3.75012 7.25C2.78362 7.25 2.00012 8.0335 2.00012 9C2.00012 9.9665 2.78362 10.75 3.75012 10.75Z"
          fill={fill}
        />
        <path
          d="M3.75012 5.5C4.71662 5.5 5.50012 4.7165 5.50012 3.75C5.50012 2.7835 4.71662 2 3.75012 2C2.78362 2 2.00012 2.7835 2.00012 3.75C2.00012 4.7165 2.78362 5.5 3.75012 5.5Z"
          fill={fill}
        />
        <path
          d="M3.75012 16C4.71662 16 5.50012 15.2165 5.50012 14.25C5.50012 13.2835 4.71662 12.5 3.75012 12.5C2.78362 12.5 2.00012 13.2835 2.00012 14.25C2.00012 15.2165 2.78362 16 3.75012 16Z"
          fill={fill}
        />
        <path
          d="M15.7501 15H8.25012C7.83612 15 7.50012 14.664 7.50012 14.25C7.50012 13.836 7.83612 13.5 8.25012 13.5H15.7501C16.1641 13.5 16.5001 13.836 16.5001 14.25C16.5001 14.664 16.1641 15 15.7501 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UnorderedList2;
