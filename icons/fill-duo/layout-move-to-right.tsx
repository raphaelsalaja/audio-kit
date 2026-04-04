import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutMoveToRight({
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
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 5C12.836 5 12.5001 5.3359 12.5001 5.75V12.25C12.5001 12.6641 12.836 13 13.2501 13C13.6642 13 14.0001 12.6641 14.0001 12.25V5.75C14.0001 5.3359 13.6642 5 13.2501 5Z"
          fill={fill}
        />
        <path
          d="M8.15932 6.3486C7.86632 6.0556 7.39172 6.0556 7.09882 6.3486C6.80592 6.6416 6.80582 7.11624 7.09882 7.40914L7.93962 8.2499H5.25012C4.83602 8.2499 4.50012 8.5858 4.50012 8.9999C4.50012 9.414 4.83602 9.7499 5.25012 9.7499H7.93962L7.09882 10.5907C6.80582 10.8837 6.80582 11.3583 7.09882 11.6512C7.24532 11.7977 7.43722 11.8709 7.62912 11.8709C7.82102 11.8709 8.01291 11.7977 8.15941 11.6512L10.2805 9.53011C10.5735 9.23711 10.5735 8.76253 10.2805 8.46963L8.15932 6.3486Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayoutMoveToRight;
