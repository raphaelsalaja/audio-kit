import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Candy({
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
          d="M6.28119 5.41225L5.37399 6.33217C3.69367 8.03606 3.71278 10.7795 5.41666 12.4598L5.5904 12.6311C7.29428 14.3115 10.0377 14.2924 11.718 12.5885L12.6252 11.6685C14.3055 9.96466 14.2864 7.22122 12.5826 5.54091L12.4088 5.36958C10.7049 3.68926 7.96151 3.70837 6.28119 5.41225Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 5.215V2.095C12.25 1.925 12.42 1.798 12.581 1.852C14.187 2.392 15.424 3.495 16.131 5.406C16.191 5.569 16.065 5.75 15.891 5.75H12.788"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.215 12.25H2.095C1.925 12.25 1.798 12.42 1.852 12.581C2.392 14.187 3.495 15.424 5.406 16.131C5.569 16.191 5.75 16.065 5.75 15.891V12.788"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.28119 5.41225L5.37399 6.33217C3.69367 8.03606 3.71278 10.7795 5.41666 12.4598L5.5904 12.6311C7.29428 14.3115 10.0377 14.2924 11.718 12.5885L12.6252 11.6685C14.3055 9.96466 14.2864 7.22122 12.5826 5.54091L12.4088 5.36958C10.7049 3.68926 7.96151 3.70837 6.28119 5.41225Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 13.6467V4.69547"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 13.3104V4.36432"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Candy;
