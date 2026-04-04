import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleAsterisk({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm3.839,9.351c.359,.207,.481,.666,.274,1.024-.139,.241-.391,.375-.65,.375-.127,0-.256-.032-.375-.101l-2.339-1.351v2.701c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.701l-2.339,1.351c-.118,.068-.247,.101-.375,.101-.259,0-.511-.134-.65-.375-.207-.359-.084-.817,.274-1.024l2.339-1.351-2.339-1.351c-.359-.207-.481-.666-.274-1.024,.207-.359,.667-.481,1.024-.274l2.339,1.351v-2.701c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.701l2.339-1.351c.359-.207,.817-.084,1.024,.274s.084,.817-.274,1.024l-2.339,1.351,2.339,1.351Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleAsterisk;
