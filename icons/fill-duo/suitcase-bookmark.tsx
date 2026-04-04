import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseBookmark({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M17.25 17.4997C17.0547 17.4997 16.8633 17.4235 16.7197 17.28L15 15.5603L13.2803 17.28C13.0655 17.4948 12.7422 17.5598 12.4629 17.4426C12.1826 17.3264 12 17.053 12 16.7497V11.2497C12 10.2849 12.7852 9.49969 13.75 9.49969H16.25C17.2148 9.49969 18 10.2849 18 11.2497V16.7497C18 17.0529 17.8174 17.3264 17.5371 17.4426C17.4443 17.4812 17.3467 17.4997 17.25 17.4997Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V8.08688C16.7592 8.02987 16.5081 7.99969 16.25 7.99969H13.75C11.9568 7.99969 10.5 9.45647 10.5 11.2497V16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseBookmark;
