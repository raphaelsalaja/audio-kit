import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareUpRight({
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
          d="M12.25 3H4.75C3.233 3 2 4.233 2 5.75V13.25C2 14.767 3.233 16 4.75 16H12.25C13.767 16 15 14.767 15 13.25V5.75C15 4.233 13.767 3 12.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 2H10.5C10.086 2 9.74999 2.336 9.74999 2.75C9.74999 3.164 10.086 3.5 10.5 3.5H13.439L8.46899 8.46997C8.17599 8.76297 8.17599 9.23801 8.46899 9.53101C8.61499 9.67701 8.80699 9.75098 8.99899 9.75098C9.19099 9.75098 9.383 9.67801 9.529 9.53101L14.499 4.56104V7.5C14.499 7.914 14.835 8.25 15.249 8.25C15.663 8.25 15.999 7.914 15.999 7.5V2.75C15.999 2.336 15.663 2 15.249 2H15.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareUpRight;
