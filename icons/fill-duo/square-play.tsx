import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePlay({
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
          d="M2 4.75C2 3.23069 3.23128 2 4.75 2H13.25C14.7687 2 16 3.23069 16 4.75V13.25C16 14.7693 14.7687 16 13.25 16H4.75C3.23128 16 2 14.7693 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 6.871C6.5 5.90505 7.54766 5.30631 8.37954 5.79094L12.0308 7.9201C12.0465 7.92928 12.0619 7.93899 12.0768 7.94919C12.8577 8.44837 12.8424 9.60761 12.0308 10.0809L8.37981 12.2099C7.54795 12.6945 6.5 12.096 6.5 11.13V9.0005V6.871Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquarePlay;
