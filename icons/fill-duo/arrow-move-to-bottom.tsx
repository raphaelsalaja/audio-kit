import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowMoveToBottom({
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
          d="M15.25 2H2.75C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5H15.25C15.664 3.5 16 3.164 16 2.75C16 2.336 15.664 2 15.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.75 7.75C6.75 7.336 6.414 7 6 7H2.75C2.336 7 2 7.336 2 7.75C2 8.164 2.336 8.5 2.75 8.5H6C6.414 8.5 6.75 8.164 6.75 7.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 7H12C11.586 7 11.25 7.336 11.25 7.75C11.25 8.164 11.586 8.5 12 8.5H15.25C15.664 8.5 16 8.164 16 7.75C16 7.336 15.664 7 15.25 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.72 11.47L9.74999 13.44V5.75C9.74999 5.336 9.41399 5 8.99999 5C8.58599 5 8.24999 5.336 8.24999 5.75V13.439L6.27999 11.469C5.98699 11.176 5.51199 11.176 5.21899 11.469C4.92599 11.762 4.92599 12.237 5.21899 12.53L8.46899 15.78C8.61499 15.926 8.80699 16 8.99899 16C9.19099 16 9.38298 15.927 9.52898 15.78L12.779 12.53C13.072 12.237 13.072 11.762 12.779 11.469C12.486 11.176 12.011 11.176 11.718 11.469L11.72 11.47Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowMoveToBottom;
