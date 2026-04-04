import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House({
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
          d="M19.5001 9.49999L12.0001 2.67944L12.1897 2.23108L21.7216 7.91642L19.5001 9.49999Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M8.5 16.2378V20.243L5 18.5V14.7934C5 13.7715 6.10395 13.1308 6.99119 13.6378C7.9242 14.171 8.5 15.1632 8.5 16.2378Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M8.5 20.243V16.2378C8.5 15.1632 7.9242 14.171 6.99119 13.6378C6.10395 13.1308 5 13.7715 5 14.7934V18.5"
          stroke={fill}
        />
        <path d="M12 2.27947V21.7548" stroke={fill} />
        <path
          d="M22 8L12.4472 12.7764C12.1657 12.9172 11.8343 12.9172 11.5528 12.7764L2 8"
          stroke={fill}
        />
        <path
          d="M19 15.191V12.9045C19 12.7187 18.8044 12.5978 18.6382 12.6809L15.2764 14.3618C15.107 14.4465 15 14.6196 15 14.809V17.0955C15 17.2813 15.1956 17.4022 15.3618 17.3191L18.7236 15.6382C18.893 15.5535 19 15.3804 19 15.191Z"
          stroke={fill}
        />
        <path
          d="M21.5145 7.7087L12.5145 2.3087C12.1978 2.11869 11.8022 2.11869 11.4855 2.3087L2.4855 7.7087C2.1843 7.88942 2 8.21493 2 8.56619V16.382C2 16.7607 2.214 17.107 2.55279 17.2764L11.3292 21.6646C11.7515 21.8757 12.2485 21.8757 12.6708 21.6646L21.4472 17.2764C21.786 17.107 22 16.7607 22 16.382V8.56619C22 8.21493 21.8157 7.88942 21.5145 7.7087Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default House;
