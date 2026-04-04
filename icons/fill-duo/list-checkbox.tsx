import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListCheckbox({
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
          d="M16.2501 4.5H10.2501C9.83599 4.5 9.50009 4.8359 9.50009 5.25C9.50009 5.6641 9.83599 6 10.2501 6H16.2501C16.6642 6 17.0001 5.6641 17.0001 5.25C17.0001 4.8359 16.6642 4.5 16.2501 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 12H10.2501C9.83599 12 9.50009 12.3359 9.50009 12.75C9.50009 13.1641 9.83599 13.5 10.2501 13.5H16.2501C16.6642 13.5 17.0001 13.1641 17.0001 12.75C17.0001 12.3359 16.6642 12 16.2501 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75009 10H3.25009C2.28359 10 1.50009 10.7835 1.50009 11.75V14.25C1.50009 15.2165 2.28359 16 3.25009 16H5.75009C6.71659 16 7.50009 15.2165 7.50009 14.25V11.75C7.50009 10.7835 6.71659 10 5.75009 10Z"
          fill={fill}
        />
        <path
          d="M6.40541 2.12599L3.52941 5.86574L2.77451 5.1108C2.48151 4.8178 2.00691 4.8178 1.71401 5.1108C1.42111 5.4038 1.42101 5.87844 1.71401 6.17134L3.07291 7.53023C3.21401 7.67133 3.40491 7.74989 3.60321 7.74989C3.61931 7.74989 3.63541 7.74943 3.65201 7.74843C3.86731 7.73423 4.06611 7.62833 4.19791 7.45693L7.59491 3.03993C7.84731 2.71183 7.78581 2.24111 7.45721 1.98811C7.13011 1.73661 6.65841 1.79689 6.40541 2.12599Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ListCheckbox;
