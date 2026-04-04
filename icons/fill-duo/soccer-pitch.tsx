import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoccerPitch({
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
          d="M1 4.75C1 3.78334 1.78393 3 2.75 3H15.25C16.2161 3 17 3.78334 17 4.75V13.25C17 14.2167 16.2161 15 15.25 15H2.75C1.78393 15 1 14.2167 1 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 12V6H2.25C3.21621 6 4 6.78379 4 7.75V10.25C4 11.2162 3.21621 12 2.25 12H1Z"
          fill={fill}
        />
        <path
          d="M17 12V6H15.75C14.7838 6 14 6.78379 14 7.75V10.25C14 11.2162 14.7838 12 15.75 12H17Z"
          fill={fill}
        />
        <path
          d="M9.75 6.61451V3H8.25V6.61451C7.23603 6.93312 6.5 7.88056 6.5 9C6.5 10.1194 7.23603 11.0669 8.25 11.3855V15H9.75V11.3855C10.764 11.0669 11.5 10.1194 11.5 9C11.5 7.88056 10.764 6.93312 9.75 6.61451ZM9 8C8.44807 8 8 8.44785 8 9C8 9.55215 8.44807 10 9 10C9.55193 10 10 9.55215 10 9C10 8.44785 9.55193 8 9 8Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SoccerPitch;
