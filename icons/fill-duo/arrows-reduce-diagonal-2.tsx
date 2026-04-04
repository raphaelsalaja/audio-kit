import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceDiagonal2({
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
          d="M12.5605 11.5H15.25C15.6641 11.5 16 11.1641 16 10.75C16 10.3359 15.6641 10 15.25 10H10.75C10.3359 10 10 10.3359 10 10.75V15.25C10 15.6641 10.3359 16 10.75 16C11.1641 16 11.5 15.6641 11.5 15.25V12.5605L14.7197 15.7802C14.8662 15.9267 15.0576 15.9999 15.25 15.9999C15.4424 15.9999 15.6338 15.9267 15.7803 15.7802C16.0733 15.4872 16.0733 15.0126 15.7803 14.7197L12.5605 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25 2C6.8359 2 6.5 2.3359 6.5 2.75V5.43951L3.2803 2.21979C2.9873 1.92679 2.51269 1.92679 2.21979 2.21979C1.92689 2.51279 1.92679 2.9874 2.21979 3.2803L5.43951 6.5H2.75C2.3359 6.5 2 6.8359 2 7.25C2 7.6641 2.3359 8 2.75 8H7.25C7.6641 8 8 7.6641 8 7.25V2.75C8 2.3359 7.6641 2 7.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceDiagonal2;
