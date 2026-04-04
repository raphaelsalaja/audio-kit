import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrin({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M8.65842 2.34981L6.48357 3.87636C18.2452 -0.431855 23.4453 18.7275 13.2903 22.1776L16.1728 21.2498L19.0539 19.2195L20.6846 16.9385L21.9408 14.0155L21.9408 11.0586L21.3276 8.39069L18.9815 4.7857L16.2687 2.90921L12.8692 2.00306L8.65842 2.34981Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M10.9613 16.4516C10.6987 17.7297 9.58342 18.222 8.24745 17.5413C6.76452 16.7857 5.55353 14.8619 5.47876 13.1803C5.47544 13.1058 5.55397 13.0574 5.6205 13.0913L10.4738 15.5642C10.8089 15.7349 11.037 16.0832 10.9613 16.4516Z"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M4.36247 8.99627C4.39939 8.14289 5.03311 7.78174 5.77791 8.18962C6.52271 8.59751 7.09656 9.61996 7.05963 10.4733C7.02271 11.3267 6.389 11.6879 5.64419 11.28C4.89939 10.8721 4.32554 9.84965 4.36247 8.99627Z"
          fill={fill}
        />
        <path
          d="M10.0339 11.804C10.0708 10.9506 10.7045 10.5895 11.4493 10.9974C12.1941 11.4052 12.7679 12.4277 12.731 13.2811C12.6941 14.1345 12.0604 14.4956 11.3156 14.0877C10.5708 13.6798 9.99693 12.6574 10.0339 11.804Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceGrin;
