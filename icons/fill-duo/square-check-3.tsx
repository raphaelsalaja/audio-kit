import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCheck3({
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
          d="M13.2501 2H4.75012C3.23134 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23134 16 4.75012 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.1017 5.59177C12.8566 5.25977 12.3839 5.19038 12.0529 5.43698C10.3302 6.71728 8.8351 8.39793 7.5959 10.4433C7.1223 9.69873 6.6057 9.04725 6.0314 8.47055C5.7384 8.17755 5.2638 8.17611 4.9709 8.46811C4.6779 8.76061 4.676 9.23525 4.9689 9.52915C5.716 10.2791 6.3585 11.1873 6.9328 12.3045C7.0607 12.5535 7.31659 12.7108 7.59689 12.7118H7.59979C7.87809 12.7118 8.134 12.5575 8.2639 12.3104C9.5139 9.9295 11.0901 8.02226 12.9475 6.64096C13.2805 6.39386 13.3488 5.92377 13.1017 5.59177Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareCheck3;
