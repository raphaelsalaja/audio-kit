import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nodes2({
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
          d="M12 19V13L13 12.5L13.5 11L19 8L20 9V15L18.5 16.5L19 18L13.5 20.5L12 19Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M18.8445 17.75L13.4842 20.491" stroke={fill} />
        <path d="M5.15556 8.25L10.5 10.983" stroke={fill} />
        <path d="M13.5 10.983L18.8445 8.25" stroke={fill} />
        <path d="M12 12.75V19.25" stroke={fill} />
        <path d="M20 8.75V15.25" stroke={fill} />
        <path d="M4 8.75V15.25" stroke={fill} />
        <path d="M5.50008 6.57382L10.7107 3.9093" stroke={fill} />
        <path d="M13.2894 3.9093L18.5 6.57382" stroke={fill} />
        <path d="M5.15556 17.75L10.5 20.483" stroke={fill} />
        <path
          d="M12 4.75C12.8284 4.75 13.5 4.07842 13.5 3.25C13.5 2.42157 12.8284 1.75 12 1.75C11.1716 1.75 10.5 2.42157 10.5 3.25C10.5 4.07842 11.1716 4.75 12 4.75Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M4 8.75C4.82842 8.75 5.5 8.07842 5.5 7.25C5.5 6.42157 4.82842 5.75 4 5.75C3.17157 5.75 2.5 6.42157 2.5 7.25C2.5 8.07842 3.17157 8.75 4 8.75Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M20 8.75C20.8284 8.75 21.5 8.07842 21.5 7.25C21.5 6.42157 20.8284 5.75 20 5.75C19.1716 5.75 18.5 6.42157 18.5 7.25C18.5 8.07842 19.1716 8.75 20 8.75Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M20 18.25C20.8284 18.25 21.5 17.5784 21.5 16.75C21.5 15.9216 20.8284 15.25 20 15.25C19.1716 15.25 18.5 15.9216 18.5 16.75C18.5 17.5784 19.1716 18.25 20 18.25Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M4 18.25C4.82842 18.25 5.5 17.5784 5.5 16.75C5.5 15.9216 4.82842 15.25 4 15.25C3.17157 15.25 2.5 15.9216 2.5 16.75C2.5 17.5784 3.17157 18.25 4 18.25Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M12 12.75C12.8284 12.75 13.5 12.0784 13.5 11.25C13.5 10.4216 12.8284 9.75 12 9.75C11.1716 9.75 10.5 10.4216 10.5 11.25C10.5 12.0784 11.1716 12.75 12 12.75Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path
          d="M12 22.25C12.8284 22.25 13.5 21.5784 13.5 20.75C13.5 19.9216 12.8284 19.25 12 19.25C11.1716 19.25 10.5 19.9216 10.5 20.75C10.5 21.5784 11.1716 22.25 12 22.25Z"
          stroke={fill}
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

export default Nodes2;
