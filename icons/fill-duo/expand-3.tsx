import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Expand3({
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
          d="M13.25 2H10C9.586 2 9.25 2.336 9.25 2.75C9.25 3.164 9.586 3.5 10 3.5H13.25C13.939 3.5 14.5 4.061 14.5 4.75V8C14.5 8.414 14.836 8.75 15.25 8.75C15.664 8.75 16 8.414 16 8V4.75C16 3.233 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8 14.5H4.75C4.061 14.5 3.5 13.939 3.5 13.25V10C3.5 9.586 3.164 9.25 2.75 9.25C2.336 9.25 2 9.586 2 10V13.25C2 14.767 3.233 16 4.75 16H8C8.414 16 8.75 15.664 8.75 15.25C8.75 14.836 8.414 14.5 8 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 7.75C3.164 7.75 3.5 7.414 3.5 7V4.56097L6.47 7.53101C6.616 7.67701 6.808 7.75098 7 7.75098C7.192 7.75098 7.384 7.67801 7.53 7.53101C7.823 7.23801 7.823 6.76297 7.53 6.46997L4.56 3.5H6.999C7.413 3.5 7.749 3.164 7.749 2.75C7.749 2.336 7.413 2 6.999 2H2.75C2.336 2 2 2.336 2 2.75V7C2 7.414 2.336 7.75 2.75 7.75Z"
          fill={fill}
        />
        <path
          d="M15.25 10.25C14.836 10.25 14.5 10.586 14.5 11V13.439L11.53 10.469C11.237 10.176 10.762 10.176 10.469 10.469C10.176 10.762 10.176 11.2371 10.469 11.5301L13.439 14.5H11C10.586 14.5 10.25 14.836 10.25 15.25C10.25 15.664 10.586 16 11 16H15.25C15.664 16 16 15.664 16 15.25V11C16 10.586 15.664 10.25 15.25 10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Expand3;
