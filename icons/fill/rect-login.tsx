import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLogin({
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
          d="M12.25,1.5H6.75c-1.517,0-2.75,1.233-2.75,2.75v4h4.439l-1.47-1.47c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l2.75,2.75c.293,.293,.293,.768,0,1.061l-2.75,2.75c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22c-.293-.293-.293-.768,0-1.061l1.47-1.47H4v4c0,1.517,1.233,2.75,2.75,2.75h5.5c1.517,0,2.75-1.233,2.75-2.75V4.25c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M4,8.25H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.25v-1.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default RectLogin;
