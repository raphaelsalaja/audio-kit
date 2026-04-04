import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackY3({
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
          d="M14.2501 4.5H3.75012C2.78362 4.5 2.00012 5.2835 2.00012 6.25V11.75C2.00012 12.7165 2.78362 13.5 3.75012 13.5H14.2501C15.2166 13.5 16.0001 12.7165 16.0001 11.75V6.25C16.0001 5.2835 15.2166 4.5 14.2501 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 1.5H4.25011C3.83601 1.5 3.50012 1.8359 3.50012 2.25C3.50012 2.6641 3.83601 3 4.25011 3H13.7501C14.1642 3 14.5001 2.6641 14.5001 2.25C14.5001 1.8359 14.1642 1.5 13.7501 1.5Z"
          fill={fill}
        />
        <path
          d="M13.7501 15H4.25011C3.83601 15 3.50012 15.3359 3.50012 15.75C3.50012 16.1641 3.83601 16.5 4.25011 16.5H13.7501C14.1642 16.5 14.5001 16.1641 14.5001 15.75C14.5001 15.3359 14.1642 15 13.7501 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackY3;
