import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Button({
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
          d="M7.40679 10.4561C7.05959 9.504 7.28859 8.4688 8.00399 7.754C8.49369 7.2667 9.13779 6.9996 9.82089 6.9996C10.1222 6.9996 10.419 7.0523 10.7037 7.1558L16.9801 9.4483C16.985 9.3816 17.0001 9.3179 17.0001 9.2501V5.7501C17.0001 4.2335 15.7667 3.0001 14.2501 3.0001H3.75009C2.23349 3.0001 1.00009 4.2335 1.00009 5.7501V9.2501C1.00009 10.7667 2.23349 12.0001 3.75009 12.0001H7.97089L7.40679 10.4561Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.0455 11.0693L10.1915 8.5654C9.797 8.4218 9.3634 8.5171 9.0645 8.8144C8.7662 9.1127 8.6709 9.5444 8.8155 9.9414L11.3199 16.7964C11.4752 17.2197 11.878 17.5005 12.3272 17.5005C12.335 17.5005 12.3423 17.5 12.3497 17.5C12.8077 17.4907 13.2096 17.1909 13.3492 16.7544L14.2359 13.9858L17.0054 13.0986C17.4414 12.959 17.7403 12.5571 17.7495 12.0991C17.7593 11.6411 17.4762 11.2275 17.0455 11.0693Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Button;
