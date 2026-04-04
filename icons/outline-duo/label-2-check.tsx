import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Check({
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
          d="m13.3,4.1211c-.19-.2351-.475-.3711-.777-.3711h-7.523c-1.105,0-2,.895-2,2l.0667,1.1077c.6025-.2273,1.2523-.3577,1.9333-.3577,3.0327,0,5.5,2.4673,5.5,5.5,0,.676-.1285,1.321-.3526,1.9199l2.3756.0801c.302,0,.587-.136.777-.3711l3.95-4.6289-3.95-4.8789Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5,8c-2.2061,0-4,1.7944-4,4s1.7939,4,4,4,4-1.7944,4-4-1.7939-4-4-4Zm2.3076,3.252l-2.25,2.5c-.1377.1528-.332.2422-.5381.2476-.0068.0005-.0127.0005-.0195.0005-.1982,0-.3896-.0786-.5303-.2197l-1.25-1.25c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l.6914.6909,1.7207-1.9126c.2783-.3066.751-.332,1.0596-.0557.3076.2773.333.7515.0557,1.0596Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.8243,14.25h1.6987c.302,0,.587-.136.777-.3711l3.95-4.8789-3.95-4.8789c-.19-.2351-.475-.3711-.777-.3711h-7.773c-1.105,0-2,.895-2,2v.4258"
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

export default Label2Check;
