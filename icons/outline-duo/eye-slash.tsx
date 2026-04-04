import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeSlash({
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
          d="M4.72911 13.271L7.07473 10.9253C6.57533 10.4292 6.25013 9.7598 6.25013 9C6.25013 7.4812 7.48143 6.25 9.00013 6.25C9.75983 6.25 10.438 6.56641 10.9352 7.06491L13.2712 4.729C12.1623 3.8843 10.7515 3.25 9.00013 3.25C5.20573 3.25 2.99142 6.21479 2.04442 7.88669C1.65202 8.57929 1.65202 9.42041 2.04442 10.1133C2.55432 11.0134 3.43551 12.2857 4.72911 13.271Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.787 6.39471L7.25757 13.9241C7.92387 14.1509 8.19437 14.75 9.00017 14.75C12.7946 14.75 15.009 11.7849 15.9559 10.1133C16.3482 9.42041 16.3482 8.57939 15.9559 7.88669C15.6957 7.42719 15.2451 6.96111 14.787 6.39471Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M7.0555 10.9446C6.5578 10.4469 6.25 9.7594 6.25 9C6.25 7.4812 7.4812 6.25 9 6.25C9.7594 6.25 10.4469 6.55779 10.9445 7.05539"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.80767 13.1923C3.46867 12.267 2.56488 11.0325 2.04418 10.1133C1.65178 9.42061 1.65178 8.57951 2.04418 7.88681C2.99118 6.21511 5.20547 3.50009 8.99987 3.50009C10.708 3.50009 12.0959 4.0503 13.1921 4.8078"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.327 6.9151C15.578 7.2579 15.7869 7.58889 15.9556 7.88669C16.348 8.57939 16.348 9.42049 15.9556 10.1132C15.0086 11.7849 12.7943 14.4999 8.99994 14.4999C8.59234 14.4999 8.20304 14.4686 7.83154 14.4106"
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

export default EyeSlash;
