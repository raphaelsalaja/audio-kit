import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCards({
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
          d="M14.75 6H6.25C5.009 6 4 7.009 4 8.25V13.75C4 14.991 5.009 16 6.25 16H14.75C15.991 16 17 14.991 17 13.75V8.25C17 7.009 15.991 6 14.75 6ZM6.25 7.5H14.75C15.164 7.5 15.5 7.836 15.5 8.25V9.5H5.5V8.25C5.5 7.836 5.836 7.5 6.25 7.5ZM14.75 14.5H6.25C5.836 14.5 5.5 14.164 5.5 13.75V11H15.5V13.75C15.5 14.164 15.164 14.5 14.75 14.5Z"
          fill={fill}
        />
        <path
          d="M2.5 11.8603V8.25C2.5 6.18057 4.18057 4.5 6.25 4.5H14V4.25C14 3.009 12.991 2 11.75 2H3.25C2.009 2 1 3.009 1 4.25V9.75C1 10.7266 1.62777 11.5524 2.5 11.8603Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CreditCards;
