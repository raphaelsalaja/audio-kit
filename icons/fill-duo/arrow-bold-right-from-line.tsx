import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRightFromLine({
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
          d="M1.75 6C1.336 6 1 6.336 1 6.75V11.25C1 11.664 1.336 12 1.75 12C2.164 12 2.5 11.664 2.5 11.25V6.75C2.5 6.336 2.164 6 1.75 6Z"
          fill={fill}
        />
        <path
          d="M16.634 8.022L11.028 3.559C10.649 3.257 10.142 3.201 9.707 3.411C9.271 3.621 9 4.053 9 4.537V6H5.75C4.785 6 4 6.785 4 7.75V10.25C4 11.215 4.785 12 5.75 12H9V13.463C9 13.947 9.271 14.379 9.707 14.589C9.882 14.673 10.068 14.714 10.252 14.714C10.528 14.714 10.801 14.621 11.028 14.441L16.633 9.978C16.932 9.739 17.104 9.383 17.104 9C17.104 8.617 16.933 8.261 16.634 8.022Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldRightFromLine;
