import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgForward({
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
          d="M9.00002 1C4.58181 1 1.00002 4.58179 1.00002 9C1.00002 10.4506 1.39246 11.8068 2.06488 12.977C2.09295 13.0343 2.13116 13.1672 2.13177 13.3972C2.13238 13.6268 2.09518 13.9039 2.01741 14.1997C1.85824 14.8052 1.55932 15.3797 1.2194 15.72C1.01031 15.9293 0.943812 16.242 1.04964 16.5183C1.15547 16.7946 1.41385 16.9828 1.70928 16.9989C2.44913 17.0391 3.26319 16.8932 3.96902 16.6876C4.4872 16.5366 4.98601 16.3421 5.39182 16.1345C5.91986 16.4026 6.63844 16.6947 7.52247 16.8619C8.00127 16.9526 8.49599 17 9.00002 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9.00002 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.28033 5.96967C7.98744 5.67678 7.51256 5.67678 7.21967 5.96967C6.92678 6.26256 6.92678 6.73744 7.21967 7.03033L8.68934 8.5H3.23041C2.81619 8.5 2.48041 8.83579 2.48041 9.25C2.48041 9.66421 2.81619 10 3.23041 10H8.68934L7.21967 11.4697C6.92678 11.7626 6.92678 12.2374 7.21967 12.5303C7.51256 12.8232 7.98744 12.8232 8.28033 12.5303L11.0303 9.78033C11.3232 9.48744 11.3232 9.01256 11.0303 8.71967L8.28033 5.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MsgForward;
