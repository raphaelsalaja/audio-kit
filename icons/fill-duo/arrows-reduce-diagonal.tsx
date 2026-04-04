import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceDiagonal({
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
          d="M7.25 10H2.75C2.3359 10 2 10.3359 2 10.75C2 11.1641 2.3359 11.5 2.75 11.5H5.43951L2.21979 14.7197C1.92679 15.0127 1.92679 15.4873 2.21979 15.7802C2.36629 15.9267 2.55769 15.9999 2.75009 15.9999C2.94249 15.9999 3.1339 15.9267 3.2804 15.7802L6.50009 12.5605V15.25C6.50009 15.6641 6.83599 16 7.25009 16C7.66419 16 8.00009 15.6641 8.00009 15.25V10.75C8.00009 10.3359 7.6641 10 7.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7803 2.2197C15.4873 1.9267 15.0127 1.9267 14.7198 2.2197L11.5001 5.43939V2.74991C11.5001 2.33581 11.1642 1.99991 10.7501 1.99991C10.336 1.99991 10.0001 2.33581 10.0001 2.74991V7.24991C10.0001 7.66401 10.336 7.99991 10.7501 7.99991H15.2501C15.6642 7.99991 16.0001 7.66401 16.0001 7.24991C16.0001 6.83581 15.6642 6.49991 15.2501 6.49991H12.5606L15.7803 3.28021C16.0733 2.98721 16.0733 2.5126 15.7803 2.2197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceDiagonal;
