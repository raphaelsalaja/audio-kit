import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Abstract({
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
          d="M9.21094 4L9 4C4.58172 4 1 7.58172 1 12C1 16.4182 4.58172 20 9 20H9.28906"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M12 6.5L11.2432 9.14746C10.9393 8.5027 10.5322 8.1084 10.085 8.1084C9.54204 8.10853 9.05976 8.68995 8.74805 9.59473C9.18449 7.46333 10.1281 5.71624 11 4.76953L12 6.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M8.74805 14.4043C9.05975 15.3096 9.54186 15.8915 10.085 15.8916C10.523 15.8916 10.921 15.5128 11.2227 14.8916L12 18L11 19.2305C10.128 18.2836 9.1844 16.5361 8.74805 14.4043Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M11.2457 14.8475C10.9416 15.4953 10.5336 15.8916 10.0851 15.8916C9.14484 15.8916 8.38257 14.1493 8.38257 12C8.38257 9.85073 9.14484 8.1084 10.0851 8.1084C10.5336 8.1084 10.9416 8.50474 11.2457 9.15253"
          stroke={fill}
        />
        <path
          d="M23 12C23 7.58172 19.4183 4 15 4C22 5 22 19 15 20C19.4183 20 23 16.4182 23 12Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 6.40118C11.3647 4.9194 10.4793 4 9.5 4C7.567 4 6 7.58172 6 12C6 16.4182 7.567 20 9.5 20C10.4793 20 11.3647 19.0806 12 17.5988"
          stroke={fill}
        />
        <path
          d="M14.5 20C12.567 20 11 16.4182 11 12C11 7.58172 12.567 4 14.5 4"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M15 20C19.4183 20 23 16.4182 23 12C23 7.58172 19.4183 4 15 4"
          stroke={fill}
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

export default Abstract;
