import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToRight({
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
          d="M9.75 14.5H6C3.519 14.5 1.5 12.481 1.5 10C1.5 7.519 3.519 5.5 6 5.5H15.5C15.914 5.5 16.25 5.836 16.25 6.25C16.25 6.664 15.914 7 15.5 7H6C4.346 7 3 8.346 3 10C3 11.654 4.346 13 6 13H9.75C10.164 13 10.5 13.336 10.5 13.75C10.5 14.164 10.164 14.5 9.75 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.25 10.5C12.058 10.5 11.866 10.4271 11.72 10.2801C11.427 9.98705 11.427 9.51202 11.72 9.21902L14.69 6.24905L11.72 3.27908C11.427 2.98608 11.427 2.51104 11.72 2.21804C12.013 1.92504 12.488 1.92504 12.781 2.21804L16.281 5.71804C16.574 6.01104 16.574 6.48608 16.281 6.77908L12.781 10.2791C12.635 10.4251 12.443 10.499 12.251 10.499L12.25 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UTurnToRight;
