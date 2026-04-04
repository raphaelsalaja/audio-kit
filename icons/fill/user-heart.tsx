import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserHeart({
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
          d="M13.7301 17.6831C13.8999 17.7723 14.0982 17.7723 14.268 17.6831C15.1652 17.2116 17.999 15.5021 17.999 12.7224C18.0034 11.5016 17.0253 10.5074 15.8124 10.5C15.0827 10.5094 14.4044 10.88 13.999 11.4907C13.5936 10.88 12.9153 10.5094 12.1856 10.5C10.9727 10.5074 9.99458 11.5016 9.99898 12.7224C9.99898 15.5021 12.8329 17.2115 13.7301 17.6831Z"
          fill={secondaryfill}
        />
        <path
          d="M10.295 16.9493C9.44811 16.0395 8.63562 14.7632 8.5143 13.1353C8.49791 12.9153 8.48793 12.6365 8.51763 12.3401C8.65888 10.9304 9.58498 9.74721 10.8609 9.2506C10.2686 9.08728 9.64468 9 8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.29503 16.6354 6.99283 17 8.99999 17C9.44743 17 9.87949 16.9819 10.295 16.9493Z"
          fill={fill}
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserHeart;
