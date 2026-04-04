import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheck2({
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
          d="M14.595,4.812l-4.984,6.399c-.137,.175-.344,.281-.565,.289-.009,0-.018,0-.026,0-.212,0-.415-.09-.558-.248l-2.77-3.077c-.277-.308-.252-.782,.056-1.06s.781-.253,1.06,.056l2.17,2.412L13.559,3.7c-1.226-1.057-2.818-1.7-4.559-1.7-3.859,0-7,3.14-7,7s3.141,7,7,7,7-3.14,7-7c0-1.572-.527-3.019-1.405-4.188Z"
          fill={fill}
        />
        <path
          d="M14.595,4.812l1.247-1.601c.255-.327,.196-.798-.131-1.053-.327-.255-.799-.196-1.053,.131l-1.099,1.411c.385,.331,.731,.705,1.036,1.111Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CircleCheck2;
