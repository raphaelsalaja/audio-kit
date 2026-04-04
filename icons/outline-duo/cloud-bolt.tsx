import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudBolt({
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
          d="M13.464 6.141C13.278 3.827 11.362 2 9 2C6.515 2 4.5 4.015 4.5 6.5C4.5 6.85 4.549 7.186 4.624 7.513C3.027 7.58 1.75 8.887 1.75 10.5C1.75 11.7817 2.55344 12.8754 3.68417 13.3052L4.25978 13.0404C4.29932 12.6179 4.4582 12.2068 4.73078 11.8599L7.48078 8.3599C8.1687 7.48437 9.39353 7.24367 10.3616 7.79377C11.3297 8.34387 11.7498 9.5193 11.3498 10.5584L11.3136 10.6522C11.834 10.8542 12.271 11.2466 12.5236 11.7664C12.7143 12.1586 12.7831 12.5884 12.7355 13.0052L13.1275 13.4478C14.8998 13.1492 16.25 11.6073 16.25 9.75C16.25 8.014 15.065 6.568 13.464 6.141Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 9.75L6.5 13.25H8.905L7.75 16.25L10.5 12.75H8.095L9.25 9.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.70499 7C10.392 6.233 11.389 5.75 12.5 5.75C12.833 5.75 13.157 5.809 13.464 5.891"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.476 13.1086C15.0717 12.6779 16.25 11.2321 16.25 9.5C16.25 7.7639 15.065 6.3179 13.464 5.8911C13.278 3.5769 11.362 1.75 9 1.75C6.515 1.75 4.5 3.7651 4.5 6.25C4.5 6.6001 4.549 6.936 4.624 7.2629C3.027 7.33 1.75 8.6369 1.75 10.25C1.75 11.4666 2.4745 12.5122 3.5151 12.9829"
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

export default CloudBolt;
