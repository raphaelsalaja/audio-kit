import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles({
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
          d="M13.0001 7C13.0001 6.3945 12.9081 5.81079 12.7406 5.25949C12.1893 5.09199 11.6054 5 11.0001 5C7.69149 5 5.00009 7.6914 5.00009 11C5.00009 11.6055 5.09209 12.1892 5.25959 12.7405C5.81089 12.908 6.39479 13 7.00009 13C10.3087 13 13.0001 10.3086 13.0001 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.0001 5C11.6054 5 12.1893 5.09199 12.7406 5.25949C11.9927 2.79729 9.70329 1 7.00009 1C3.69149 1 1.00009 3.6914 1.00009 7C1.00009 9.7031 2.79749 11.9927 5.25959 12.7405C5.09209 12.1892 5.00009 11.6055 5.00009 11C5.00009 7.6914 7.69149 5 11.0001 5Z"
          fill={fill}
        />
        <path
          d="M12.7406 5.25949C12.9081 5.81079 13.0001 6.3945 13.0001 7C13.0001 10.3086 10.3087 13 7.00008 13C6.39478 13 5.81088 12.908 5.25958 12.7405C6.00748 15.2027 8.29688 17 11.0001 17C14.3087 17 17.0001 14.3086 17.0001 11C17.0001 8.2969 15.2027 6.00729 12.7406 5.25949Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Circles;
